#include<stdio.h>
#include<conio.h>
#include<graphics.h>
#include<math.h>
#define round(a)((int)a+0.5)
float u1=0,u2=1;
int xwmin,xwmax,ywmin,ywmax,x1,y1,x2,y2;
void dda(int xa,int ya,int xb,int yb)
{
	int dx,dy,i,steps,xincr,yincr,x=xa,y=ya;
	dx=xb-xa;
	dy=yb-ya;
	if(abs(dx)>abs(dy))
		steps=abs(dx);
	else
		steps=abs(dy);
	xincr=dx/steps;
	yincr=dy/steps;
	putpixel(x,y,RED);
	for(i=1;i<=steps;i++)
	{
		x=x+xincr;
		y=y+yincr;
		putpixel(x,round(y),RED);
	}
}
int cliptest(float p,float q)
{
	int value=1;
	float r;
	if(p<0)
	{
		r=q/p;
		if(r>u2)
			value=0;
		if(r>u1)
			u1=r;
	}
	else if(p>0)
	{
		r=q/p;
		if(r<u2)
			u2=r;
		if(r<u1)
			value=0;
	}
	else
	{
		if(q<0)
			value=0;
	}
	return value;
}
void liang()
{
	float dx=x2-x1;
	float dy=y2-y1;
	if(cliptest(-dx,x1-xwmin))
	{
		if(cliptest(dx,xwmax-x1))
		{
			if(cliptest(-dy,y1-ywmin))
			{
				if(cliptest(dy,ywmax-y1))
				{
					if(u2<1)
					{
						x2=x1+u2*dx;
						y2=y1+u2*dy;
					}
					if(u1>0)
					{
						x1=x1+u1*dx;
						y1=y1+u1*dy;
					}
					dda(x1,y1,x2,y2);
				}
			  //	dda(x1,y1,x2,y2);
			}
		}
	}
}
void main()
{
	int gd=DETECT,gm;
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	xwmin=100;
	ywmin=50;
	xwmax=250;
	ywmax=250;
	x1=50;
	y1=100;
	x2=300;
	y2=150;
	rectangle(xwmin,ywmin,xwmax,ywmax);
	dda(x1,y1,x2,y2);
	getch();
	cleardevice();
	rectangle(xwmin,ywmin,xwmax,ywmax);
	liang();
	getch();
}