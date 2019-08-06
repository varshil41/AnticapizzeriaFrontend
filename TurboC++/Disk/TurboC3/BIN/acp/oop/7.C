#include<iostream.h>
#include<conio.h>
class complex
{
	int real;
	int img;
	public:
		void getdata(int r,int i)
		{
			real=r;
			img=i;
		}
		void putdata()
		{
			cout<<"\n"<<real<<" "<<img;
		}
		friend complex add(complex &c1,complex &c2);
};
complex add(complex &c1,complex &c2)
{
	complex c3;
	c3.real=c1.real+c2.real;
	c3.img=c1.img+c2.img;
	return c3;
}
main()
{
	complex c1,c2,c3;
	clrscr();
	c1.getdata(5,6);
	c2.getdata(6,5);
	c1.putdata();
	c2.putdata();
	c3=add(c1,c2);
	c3.putdata();
	getch();
	return(0);
}

