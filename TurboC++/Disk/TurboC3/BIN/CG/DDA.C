#include<stdio.h>
#include<conio.h>
#include<graphics.h>
#include<math.h>
int round(float a)
{
	int x = a + 1;
	return (x);
}
void dda(int xa,int ya,int xb,int yb,int arr[])
{
	int dx,dy,steps,xincr,yincr,x=xa,y=ya,i,cnt=0,j,w=10;
	int mul1 = (w-1)/2;
	int mul2 = (xb-xa);
	int mul3 = (yb-ya);
	int mul4 = abs(xb-xa);
	int wy1 = mul1* (sqrtl((mul2 * mul2) + (mul3 * mul3)));
	int wy = wy1 / mul4;


	dx = xb-xa;
	dy = yb-ya;

	if(abs(dx)>abs(dy))
	{
		steps = dx;
	}
	else
	{
		steps = dy;
	}
	xincr = dx/steps;
	yincr = dy/steps;
	putpixel(x,y,RED);

	for(i=0;i<steps;i++)
	{
		x = x + xincr;
		y = y + yincr;
		if(arr[cnt]==1)
		{
		for(j=round(y)+wy;j>round(y)-wy;j--)
		{
		putpixel(x,j,RED);
		}
		}
		cnt++;
		if(cnt>9)
		{
			cnt=0;
		}
	}
}
void main()
{
	int gd=DETECT,gm;
	int arr[10] = {1,1,0,1,1,0,1,1,0,1};
	int arr1[10]= {1,1,1,1,0,0,1,1,1,1};
	int ch;
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	printf("1 for -- -- -- --");
	printf("\n2 for ----  ----");
	printf("\n enter your choice");
	scanf("%d",&ch);
	switch(ch)
	{
		case 1:
			dda(200,100,300,200,arr);
			break;
		case 2:
			dda(200,100,300,200,arr1);
			break;
		default:
			printf("\nwrong choice");
	}

	getch();
}