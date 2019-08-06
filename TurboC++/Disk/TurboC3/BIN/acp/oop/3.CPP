#include<iostream.h>
#include<conio.h>
class countt
{
	int a;
	static int count;
	public:
		void increment()
		{

			count++;
		}
		void putdata()
		{
			cout<<"\n count = "<<count;
		}
};
int countt :: count=0;
main()
{
	countt c1,c2,c3,c4;
	clrscr();
	c1.increment();
	c2.increment();
	c3.increment();
	cout<<"\n\n\n";
	c1.putdata();
	c2.putdata();
	c3.putdata();
	getch();
	return(0);
}