#include<iostream.h>
#include<conio.h>
class sample
{
	int a;
	int b;
	public:
		int c;
		void getdata()
		{
			cout<<"\n enter the numbers ";
			cin>>a>>b;
		}
		void putdata()
		{
			cout<<"\n A = "<<a<<"\n B = "<<b;
		}
};
main()
{
	sample s1;
	clrscr();
	s1.getdata();
	s1.putdata();
	s1.c=5;
	cout<<"\n C = "<<s1.c;
	getch();
}