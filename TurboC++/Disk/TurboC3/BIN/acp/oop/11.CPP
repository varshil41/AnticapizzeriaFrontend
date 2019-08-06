#include<iostream.h>
#include<conio.h>
class time
{
	int min,hour,second;
	public:
		time(){}
		time(int h)
		{
			hour=h;
			min=60;
		}
		time(int h,int m,int s=50)
		{
			hour=h;
			min=m;
			second=s;
		}
		void putdata()
		{
			cout<<"\n"<<hour<<":"<<min<<":"<<second;
		}
};
main()
{
	clrscr();
	time t1,t2,t3;
	t2=time(5);
	t3=time(5,60,40);
	t2.putdata();
	t3.putdata();
	getch();
	return (0);
}
