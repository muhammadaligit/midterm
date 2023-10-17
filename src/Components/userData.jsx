import React from "react";

const userData = () => {
  return <div className="text-primary">

data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.product_name}</td>
                            <td>{item.product_category}</td>
                            <td>
                                {
                                    inEditMode.status && inEditMode.rowKey === item.id ? (
                                        <input value={unitPrice}
                                               onChange={(event) => setUnitPrice(event.target.value)}
                                        />
                                    ) : (
                                        item.unit_price
                                    )
                                }
                            </td>
  </div>;
};

export default userData;
