#include<conio.h>
#include<stdio.h>
#include<graphics.h>
#include<math.h>
#define round(a)((int)a+0.5)
void bres(int xa,int ya,int xb,int yb)
{
	int dx,dy,x,y,xend,yend,twody,twodydx,twodx,twodxdy,p;
	float m;
	dx=abs(xa-xb);
	dy=abs(ya-yb);
if(dx>dy)
{
	if(dx==0)
		m=(float)dy;
	else
		m=(float)(dy/dx);
	p=(2*dy)-dx;
	twody=2*dy;
	twodydx=2*(dy-dx);

	if(xa>xb)
	{
		x=xb;
		y=yb;
		xend=xa;
	}
	else
	{
		x=xa;
		y=ya;
		xend=xb;
	}
	putpixel(x,y,RED);
	while(x<xend)
	{
		x++;
		if(p<0)
			p=p+twody;
		else
		{
			if(m>0 && m<1)
			{
				y++;
			}
			else if(m<0 && m>-1)
			{
				y--;
			}
			p=p+twodydx;
		}
		putpixel(x,y,RED);
	}
}
else
{
	if(dx==0)
		m=(float)dy;
	else
		m=(float)(yb-ya)/(float)(xb-xa);
	p=(2*dx)-dy;
	twodx=2*dx;
	twodxdy=2*(dx-dy);

	if(ya>yb)
	{
		x=xb;
		y=yb;
		yend=ya;
	}
	else
	{
		x=xa;
		y=ya;
		yend=yb;
	}
	putpixel(x,y,RED);
	while(y<yend)
	{
		y++;
		if(p<0)
			p=p+twodx;
		else
		{
			if(m>=1)
			{
				x++;
			}
			else if(m<=-1)
			{
				x--;
			}
			p=p+twodxdy;
		}
		putpixel(x,y,RED);
	}
}
}
void main()
{
	int gd=DETECT,gm;
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	bres(50,50,100,100);
	getch();
}