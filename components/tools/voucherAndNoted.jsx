import InputWithIcon from "./InputWithIcon";
import React, { useState } from "react";

export default function VoucherAndNoted() {
  const [VoucherCode, setVoucherCode] = useState('');
  const [AddNoted, setAddNoted] = useState('');

  return (
    <form className="flex  justify-center items-center">
  <div className="flex flex-col w-[398px]  space-y-2">
    <div className="">
      <span>Coupons</span>
      <InputWithIcon
        type="text"
        placeholder="Input Voucher Code"
        onChange={(e) => setVoucherCode(e.target.value)} // Correct state update here
        icon="ticket"
        className="bg-accent border-2 border-primary text-primary w-full"
      />
    </div>
    <div className="">
      <span>Add Note</span>
      <InputWithIcon
        type="text"
        placeholder="Add noted"
        onChange={(e) => setAddNoted(e.target.value)} // Correct state update here
        icon="sticky-note"
        className="bg-accent border-2 border-primary text-primary w-full"
      />
    </div>
  </div>
</form>

  );
}
