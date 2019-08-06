#include<iostream.h>
#include<conio.h>
class A
{
	int a;
	int b;
	public:
		A(){}
		A(int x,int y)
		{
			a=x;
			b=y;
		}
		void putdata()
		{
			cout<<"\n"<<a<<"\t"<<b;
		}
		operator int()
		{
			return a*b;
		}
		int geta()
		{
			return a;
		}
		int getb()
		{
			return b;
		}
};
class B
{
	int x;
	int y;
	public:
		B(){}
		B(A &a)
		{
			x=a.geta();
			y=a.getb();
		}
		void putdata()
		{
			cout<<"\n"<<x<<"\t"<<y;
		}
};
main()
{
	clrscr();
	A a1,a2;
	B b1,b2;
	int ans;
	a2=A(5,6);
	a2.putdata();
	ans=a2;
	cout<<"\n ans = "<<ans;
	b2=B(a2);
	b2.putdata();
	getch();
	return(0);
}

