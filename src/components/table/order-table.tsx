import React from "react";
import TableWrapper from "./table-wrapper";
import { getOrders } from "@/utils/service";

const OrderTable = async () => {
  const orders = await getOrders();

  const getColor = (status: string) => {
    switch (status) {
      case "Shipped":
        return "bg-blue-600";
      case "Delivered":
        return "bg-green-600";
      case "Processing":
        return "bg-yellow-600";

      default:
        return "";
    }
  };
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>#</th>
          <th>Sipariş Sayısı</th>
          <th>Ürün Sayısı</th>
          <th>Toplam Fiyat</th>
          <th>Adres</th>
          <th>Durum</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order, key) => (
          <tr key={key}>
            <td>{order.id} </td>
            <td>
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>

            <td>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</td>

            <td className="text-green-600">{order.total_price.toFixed(2)} </td>

            <td>{order.shipping_address.city} </td>

            <td>
              <span
                className={`${getColor(
                  order.status
                )} text-white py-2 px-3 shadow w-full rounded-full text-sm`}
              >
                {order.status}{" "}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default OrderTable;
