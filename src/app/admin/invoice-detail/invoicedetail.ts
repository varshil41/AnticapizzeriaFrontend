export class InvoiceDetail {
  constructor(
    public InvoiceDetID?:number,
    public InvoiceDetQTY?:number,
    public InvoiceDetPrice?:number,
    public FKInvoiceID?:number,
    public FKItemID?:number

  ){}
}
