#include<iostream.h>
#include<conio.h>
class abc
{
	int a;
	int b;
	int ans;
	public:
		abc()
		{
			cout<<"\n enter the two values ";
			cin>>a>>b;
		}
		void putdata()
		{
			ans=a+b;
			cout<<" ans = "<<ans;
		}
};
main()
{
	clrscr();
	abc a1;
	a1.putdata();
	getch();
	return(0);
}