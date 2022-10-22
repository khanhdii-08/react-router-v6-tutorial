import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { invoices } from "../data/Invoices";

const Invoice = () => {
  const params = useParams<{ invoiceId: string }>();

  const invoice = invoices.find(
    (invoice) => invoice.id.toString() === params.invoiceId
  );

  const navigate = useNavigate();

  useEffect(() => {
    // Push user to /invoices, one level up
    if (!invoice) navigate("..");
  }, [invoice]);

  return (
    <div>
      <h2 style={{ padding: "1rem" }}>
        Invoice #{invoice?.id} for {invoice?.name}
      </h2>
    </div>
  );
};

export default Invoice;
