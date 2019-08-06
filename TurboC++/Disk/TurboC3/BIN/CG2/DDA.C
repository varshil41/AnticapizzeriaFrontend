#include<stdio.h>
#include<conio.h>
#include<graphics.h>
#include<math.h>
int round(float a)
{
	int x = a + 1;
	return x;
}
void dda(int xa,int ya,int xb,int yb,int arr[])
{
	int dx,dy,steps,xincr,yincr,x=xa,y=ya,i,cnt=0,w=20,j;
	int mul = (w-1)/2;
	int mul2 = abs(xb-xa) * abs(xb-xa);
	int mul3 = abs(yb-ya) * abs(yb-ya);
	int mul4 = abs(xb-xa);
	int wy1 = mul * (sqrtl(mul2 + mul3));
	int wy = wy1/mul4;
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
		x = x+xincr;
		y = y+yincr;
		if(arr[cnt]==1)
		{
		for(j=y+wy;j>y-wy;j--)
		{
		putpixel(x,round(j),RED);
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
	int arr[10] = {1,1,1,1,0,0,1,1,1,1};
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	dda(50,50,100,100,arr);
	getch();

}