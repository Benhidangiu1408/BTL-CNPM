import useStudentStore from '@/current_user/user';
import './PrintingPage.css';
import React from 'react';
import useOrderStore from '@/current_user/order';



const PrintingPage = () => {
  const{orders,deleteOrderByName}=useOrderStore()
  return (
    
    <div className="container">
      <h2 className="title">Printing Queue</h2>
      <div className="files-list">
        {orders.map((order,index) => (
          <div key={order.filename} className="file-item">
            <div className="file-name">{order.filename}</div>
            <div className="file-details">
              <div className="file-count">{order.properties.printnum} bản</div>
              <div className="file-code">{order.printerid}</div>
              <div className="file-status">{index%2===0?"Pending":"Completed"}</div>
            </div>
            <button className="cancel-button" onClick={()=>deleteOrderByName(order.filename)}>Hủy</button>
          </div>
        ))}
      </div>
    </div>
  );
  
};





export default PrintingPage