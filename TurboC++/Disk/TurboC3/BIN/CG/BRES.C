#include<stdio.h>
#include<conio.h>
#include<graphics.h>
void bres(int xa,int ya,int xb,int yb)
{
	int x,y,dx,dy,m,p,twody,twodydx,twodx,twodxdy,xend,yend;
	dx=abs(xa-xb);
	dy=abs(ya-yb);


if(dx>dy)
{
	if(dx==0)
	{
		m=(float)dy;
	}
	else
	{
		m=(float)(dy/dx);
	}
	p = (2 * dy)-dx;
	twody = 2 * dy;
	twodydx = 2 * (dy-dx);

	if(xa>xb)
	{
		x = xb;
		y = yb;
		xend = xa;
	}
	else
	{
		x = xa;
		y = ya;
		xend = xb;
	}
	putpixel(x,y,RED);

	while(x<xend)
	{
		x++;
		if(p<0)
		{
			p = p + twody;
		}
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
			p = p + twodydx;
		}
		putpixel(x,y,RED);
	}
}

else
{
	if(dx==0)
	{
		m=(float)(dy);
	}
	else
	{
		m=(yb-ya)/(xb-xa);
	}
	p = (2 * dx)-dy;
	twodx = 2 * dx;
	twodxdy = 2 * (dx-dy);

	if(ya>yb)
	{
		x = xb;
		y = yb;
		yend = ya;
	}
	else
	{
		x = xa;
		y = ya;
		yend = yb;
	}
	putpixel(x,y,RED);

	while(y<yend)
	{
		y++;
		if(p<0)
		{
			p = p + twodx;
		}
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
			p = p + twodxdy;
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
	bres(100,100,100,300);
	bres(100,100,300,100);
	bres(300,100,300,300);
	bres(300,300,100,300);
	bres(100,100,50,200);
	bres(50,200,100,300);
	circle(150,300,30);
	circle(250,300,30);
	bres(300,100,100,300);
	bres(100,100,300,300);
	getch();
}