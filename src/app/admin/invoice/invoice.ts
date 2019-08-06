import { InvoiceDetail } from "../invoice-detail/invoicedetail";
import { Item } from "../item/item";

export class Invoice {
  constructor(
    public InvoiceAMOUNT?: number,
    public TableNO?: number,
    public PaymentMODE?:string,
    public InvoiceDATE?: Date,
    public InvoiceID?: number,
    public detail?: InvoiceDetail[],
    public item?:Item[]

  ) {}
}
