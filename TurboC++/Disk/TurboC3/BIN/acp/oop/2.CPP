#include<iostream.h>
#include<conio.h>
class sample
{
	int id;
	int rollno;
	char name[50];
	public:
		void getdata();
		void getid();
		void putdata();
};
inline void sample :: getdata()
{
	cout<<"\n enter the roll number ";
	cin>>rollno;
	cout<<"\n enter the name ";
	cin>>name;
}
void sample :: getid()
{
	cout<<"\n enter the id ";
	cin>>id;
}
void sample :: putdata()
{
	cout<<"\n NAME = "<<name;
	cout<<"\n ROLLNO = "<<rollno;
	getid();
	cout<<"\n ID = "<<id;
}
main()
{
	sample s1;
	clrscr();
	s1.getdata();
	s1.putdata();
	getch();
}