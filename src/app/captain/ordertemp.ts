export class Ordertemp {
  constructor(
    public FKItemID:number,
    public OrderQty:number,
    public OrderPRICE:number,
    public OrderStatus:string,
    public TableNO:number,
    public FKEmpID:string,
    public OrderREMARK:string,
    public OrderID?:number

  ) {}
}
