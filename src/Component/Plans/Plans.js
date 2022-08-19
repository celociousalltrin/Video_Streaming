import React from 'react';
import "./Plans.css";
import { useState,useEffect } from 'react';
import {addDoc, collection,getDocs,onSnapshot,query,where} from "firebase/firestore"
import {db} from "../../firebase";
import {loadStripe} from "@stripe/stripe-js";
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux/es/exports';


const Plans = () => {
  const [product,setProduct] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "customers", user.uid, "subscriptions"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach( (doc) => {
        setSubscription({
          role: doc.data().quantity,
          current_period_end: doc.data().current_period_end.seconds,
          current_period_start: doc.data().current_period_start.seconds,
        });
      });
    };
    fetchData();
  }, [user.uid]);

  useEffect(()=>{
     const fetchData = async()=>{
      const q = query(collection(db,"products"),where("active","==",true))

      const querySnapshot = await getDocs(q)
      const plans = {};

      querySnapshot.forEach(async(doc)=>{
        plans[doc.id] = doc.data()

        const priceQuery = query(collection(doc.ref,"prices"));

       const priceSnap = await getDocs(priceQuery);

       priceSnap.docs.forEach((priceDoc)=>{
        plans[doc.id].prices = {
          priceID:priceDoc.id,
          priceData:priceDoc.data()
        }
       })
      })
      setProduct(plans)
     }
     fetchData();
  },[])

  const loadCheckout = async (priceID) => {
    const docRef = await addDoc(
      collection(db, "customers", user.uid, "checkout_sessions"),
      {
        price: priceID,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    onSnapshot(docRef, async (snapshot) => {
      const { error, sessionId } = snapshot.data();

      if (error) {
        alert(`An error occurred: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51LXgpqSJ6i0H5tW7VqAKqLBLgP6p5z3JagIje6otngLFkwvCAYIzqHcL346Td0NyFRDyQv49imSJxt23ucQT953H00o8AaHr2E"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (  
    <div className='Plans'>
        <br />
        {subscription && (
        <p>
          Renewal Date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {
        Object.entries(product).map(([productId,productData])=>{
          const isCurrentPackage = productData.description
          ?.toLowerCase()
          .includes(subscription?.role);
          return (
            <div key={productId} className={`${
              isCurrentPackage && "plansScreen__plan--disabled"
            } plansScreen__plan`}>
              <div className='plansScreen__info'> 
              <h4>{productData.name}</h4>
              <h5>{productData.description}</h5>
              </div>
      <button onClick={()=>
        !isCurrentPackage && loadCheckout(productData.prices.priceID)}> {isCurrentPackage ? "Current Package" : "Subscribe"}</button>
              </div>
          )
        })
      }
        
    </div>
  )
}

export default Plans;