export class OrderItem{
  constructor(
        public OrerID:number,
        public FKItemID:number,
        public OrderQty:number,
        public OrderPRICE:number,
        public OrderStatus:string,
        public TableNO:number,
        public FKEmpID:string,
        public OrderREMARK:string,
        public itemID:number,
        public itemNAME:string,
        public itemPRICE:number,
        public itemINGREDIENTS:string,
        public itemIMG:string,
        public fkCategoryID:number,
        public itemPREPARETIME:string,
        public itemTYPE:string,

    ){}
}
