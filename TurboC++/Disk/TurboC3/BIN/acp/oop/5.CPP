#include<iostream.h>
#include<conio.h>
class student
{
	int no;
	char name[20];
	public:
		void getdata()
		{
			cout<<"\n enter the no and name ";
			cin>>no>>name;
		}
		void putdata()
		{
			cout<<"\n NO = "<<no;
			cout<<"\t Name = "<<name;
		}
};
main()
{
	student s1[3];
	int i;
	clrscr();
	for(i=0;i<3;i++)
	{
		s1[i].getdata();
	}
	for(i=0;i<3;i++)
	{
		s1[i].putdata();
	}
	getch();
	return(0);
}