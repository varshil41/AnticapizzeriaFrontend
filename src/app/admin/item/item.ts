export class Item {
  constructor(
    public itemID:number,
    public itemNAME:string,
    public itemPRICE:number,
    public itemINGREDIENTS:string,
    public itemIMG:string,
    public fkCategoryID:number,
    public itemPREPARETIME:string,
    public itemTYPE:string
  ){}
}
