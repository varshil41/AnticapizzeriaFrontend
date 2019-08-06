#include<iostream.h>
#include<conio.h>
class add
{
	int a,b,c,ans;
	public:
		add(){}
		add(int x,int y)
		{
			a=x;
			b=y;
			ans=a+b;
		}
		add(int x,int y,int z)
		{
			a=x;
			b=y;
			c=z;
			ans=a+b+c;
		}
		void putdata()
		{
			cout<<"\n ans = "<<ans;
		}
};
main()
{
	clrscr();
	int a,b,c;
	cout<<"\n enter the three values ";
	cin>>a>>b>>c;
	add a1,a2(a,b),a3(a,b,c);
	a2.putdata();
	a3.putdata();
	getch();
	return(0);
}

