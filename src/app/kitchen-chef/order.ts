export class Order
{
  constructor(
    public OrderID:number,
    public FKItemID:number,
    public OrderQty:number,
    public OrderPRICE:number,
    public OrderStatus:string,
    public TableNO:number,
    public FKEmpID:number,

  ){}
}
