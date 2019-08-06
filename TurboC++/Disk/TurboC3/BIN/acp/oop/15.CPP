#include<iostream.h>
#include<conio.h>
class complex
{
	int real;
	int img;
	public:
		complex(){}
		complex(int r,int i)
		{
			real=r;
			img=i;
		}
		void putdata()
		{
			cout<<"\n"<<real<<" + "<<img<<"i";
		}
		complex operator +(complex &c1)
		{
			real=c1.real+real;
			img=c1.img+img;
			putdata();
		}
};
main()
{
	clrscr();
	complex c1,c2,c3,c4;
	c2=complex(5,6);
	c3=complex(6,5);
	c2+c3;
	getch();
	return (0);
}