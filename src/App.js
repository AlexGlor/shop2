import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Items from "./components/Items";

export default function App() {

  const [orders, setOrders] = useState([]);
  const [items,setItems] = useState([
    {
      id:1,
      title:'Книга 1',
      img:'12.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Классика',
      price:'102',
    },
    {
      id:2,
      title:'Книга 2',
      img:'11.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Классика',
      price:'50',
    },
    {
      id:3,
      title:'Книга 3',
      img:'10.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Классика',
      price:'бесплатно',
    },
    {
      id:4,
      title:'Книга 4',
      img:'9.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Проза',
      price:'бесплатно',
    },
    {
      id:5,
      title:'Книга 5',
      img:'8.jpeg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Приключения',
      price:'бесплатно',
    },
    {
      id:6,
      title:'Книга 6',
      img:'7.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Драма',
      price:'бесплатно',
    },
    {
      id:7,
      title:'Книга 7',
      img:'6.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Классика',
      price:'бесплатно',
    },
    {
      id:8,
      title:'Книга 8',
      img:'5.png',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Сатира',
      price:'бесплатно',
    },
    {
      id:9,
      title:'Книга 9',
      img:'4.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Юмор',
      price:'бесплатно',
    },
    {
      id:10,
      title:'Книга10',
      img:'3.webp',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'наука',
      price:'бесплатно',
    }
  ])

  const addToOder=(item3)=>{
    if(!orders.some(el=>el.id===item3.id)){
    setOrders([...orders, item3]);
  }
};

const deleteOrder =(id)=>{
  setOrders(orders.filter((el)=> el.id !==id));
};

  return (
   <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Items allItems={items} onAdd={addToOder}/>
    <Footer/>
   </div>
  );
  }


