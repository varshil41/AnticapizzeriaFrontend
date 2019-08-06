export class ItemInInvd {
  constructor(
    public itemID?: number,
    public itemNAME?: string,
    public itemPRICE?: number,
    public itemINGREDIENTS?: string,
    public itemIMG?: string,
    public fkCategoryID?: number,
    public itemPREPARETIME?: string,
    public itemTYPE?: string,
    public InvoiceDATE?: Date,
    public InvoiceAMOUNT?: number,
    public TableNO?: number,
    public InvoiceID?: number,
    public InvoiceDetID?:number,
    public InvoiceDetQTY?:number,
    public InvoiceDetPrice?:number,
    public FKInvoiceID?:number,
    public FKItemID?:number
  ){}
}

