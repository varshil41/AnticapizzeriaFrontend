#include<iostream.h>
#include<conio.h>
class unary
{
	int x,y;
	public:
		unary(){}
		unary(int a,int b)
		{
			x=a;
			y=b;
		}
		void putdata()
		{
			cout<<"\n x = "<<x<<"\n y = "<<y;
		}
		void operator -()
		{
			x=-x;
			y=-y;
		}
};
main()
{
	clrscr();
	unary u1,u2,u3;
	u2=unary(5,6);
	u2.putdata();
	-u2;
	u2.putdata();
	getch();
	return(0);
}
