#include<iostream.h>
#include<conio.h>
class a
{
	static int count;
	public:
		void in()
		{
			count++;
		}
		static void display()
		{
			cout<<"\n\n";
			cout<<count;

		}
};
int a::count=0;
main()
{
	a a1,a2,a3,a4;
	clrscr();
	a1.in();
	a2.in();
	a3.in();
	cout<<"\n\n\n";
	a1.display();
	a2.display();
	a3.display();
	getch();
}
