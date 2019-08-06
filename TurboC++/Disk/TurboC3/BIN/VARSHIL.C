#include<stdio.h>
#include<conio.h>
void sum(int,int);
void sub(int,int);
void multi(int,int);
void divi(int,int);
int c;
void main()
{
	int a,b;
	clrscr();
	printf("enter the two numbers");
	scanf("%d %d",&a,&b);
	sum(a,b);
	sub(a,b);
	multi(a,b);
	divi(a,b);
	getch();
	}
void sum(int x,int y)
{
	c=x+y;
	printf("\n%d",c);

	}
void sub(int x,int y)
{
	c=x-y;
	printf("\n%d",c);
	}
void multi(int x,int y)
{
	c=x*y;
	printf("\n%d",c);
	}
void divi(int x,int y)
{
	c=x/y;
	printf("\n%d",c);
	}