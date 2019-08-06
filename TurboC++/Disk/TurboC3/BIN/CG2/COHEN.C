#define round(a)((int)a+0.5)
#include<stdio.h>
#include<conio.h>
#include<graphics.h>
#include<math.h>
#define lb 1
#define rb 2
#define bb 4
#define tb 8
int x1,x2,y1,y2,xwmin,xwmax,ywmin,ywmax,code1=0,code2=0;
void dda(int xa,int ya,int xb,int yb)
{
	int dx,dy,steps,x=xa,y=ya,i,xincr,yincr;
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
		putpixel(round(x),round(y),RED);
	}
}
int accept()
{
	if((code1|code2)==0)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
int reject()
{
	if((code1&code2)!=0)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
int inside(int a)
{
	if(a==0)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
int encode(int x,int y)
{
	int code=0;
	if(x<xwmin)
	{
		code=code|lb;
	}
	if(x>xwmax)
	{
		code=code|rb;
	}
	if(y<ywmin)
	{
		code=code|bb;
	}
	if(y>ywmax)
	{
		code=code|tb;
	}
	return code;
}
int swapts()
{       int t,t1;
	t=x1;
	x1=x2;
	x2=t;
	t1=y1;
	y1=y2;
	y2=t1;
}
int swaptscode()
{
	int t=code1;
	code1=code2;
	code2=t;
}
void cohen()
{
	int done=0,draw=0;
	float m;
	while(done==0)
	{
		code1=encode(x1,y1);
		code2=encode(x2,y2);
		if(accept())
		{
			done=1;
			draw=1;
		}
		else if(reject())
		{
			done=1;
		}
		else
		{
			if(inside(code1))
			{
				swapts();
				swaptscode();
			}
			if(x1!=x2)
			{
				m=(y2-y1)/(float)(x2-x1);
			}
			if(code1 & lb)
			{
				y1=y1+m*(xwmin-x1);
				x1=xwmin;
			}
			if(code1 & rb)
			{
				y1=y1+m*(xwmax-x1);
				x1=xwmax;
			}
			if(code1 & bb)
			{
				x1=x1+((ywmin-y1)/m);
				y1=ywmin;
			}
			if(code1 & tb)
			{
				x1=x1+((ywmax-y1)/m);
				y1=ywmax;
			}
		}
		if(draw==1)
		{
			dda(x1,y1,x2,y2);
			done=1;
		}
	}
}
void main()
{
	int gd=DETECT,gm;
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	x1=50;
	y1=150;
	x2=400;
	y2=300;
	xwmin=160;
	xwmax=480;
	ywmin=80;
	ywmax=400;
	rectangle(xwmin,ywmin,xwmax,ywmax);
	dda(x1,y1,x2,y2);
	getch();
	cleardevice();
	rectangle(xwmin,ywmin,xwmax,ywmax);
	cohen();
	getch();
}