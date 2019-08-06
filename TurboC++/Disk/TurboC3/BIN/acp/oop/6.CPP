#include<iostream.h>
#include<conio.h>
class student
{
	int no;
	char name[30];
	public:
		void getdata()
		{
			cout<<"\n enter the no and name ";
			cin>>no>>name;
		}
		void putdata()
		{
			cout<<"\n name = "<<name;
			cout<<"\n no = "<<no;
		}
		void add(student &s1,student &s2)
		{
			student s3;
			s3.no=s1.no+s2.no;
			cout<<"\n add = "<<s3.no;
		}
	       /*	void display()
		{
			cout<<"\n add = "<<no;
		} */
};
main()
{
	student s1,s2,s3;
	clrscr();
	s1.getdata();
	s2.getdata();
	s3.add(s1,s2);
	s1.putdata();
	s2.putdata();
       //	s3.display();
	getch();
	return(0);
}
