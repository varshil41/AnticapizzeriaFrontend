#include<stdio.h>
#include<conio.h>
#include<graphics.h>
#define round(a)((int)a+0.5)
#define lb 1
#define rb 2
#define bb 4
#define tb 8
int xwmin,ywmin,xwmax,ywmax,x1,y1,x2,y2,code1,code2;
void dda(int xa,int ya,int xb,int yb)
{
	int dx,dy,steps,xincr,yincr,i,x=xa,y=ya;
	dx=abs(xb-xa);
	dy=abs(yb-ya);
	if(dx>dy)
	{
	       steps=dx;
	}
	else
	{
		steps=dy;
	}
	xincr=dx/steps;
	yincr=dy/steps;
	putpixel(x,y,RED);
	for(i=0;i<steps;i++)
	{
		x=x+xincr;
		y=y+yincr;
		putpixel(x,round(y),RED);
	}
}
int accept()
{
	if((code1|code2)==0)
		return 1;
	else
		return 0;
}
int reject()
{
	if((code1&code2)!=0)
		return 1;
	else
		return 0;
}
int inside(int a)
{
	if(a==0)
		return 1;
	else
		return 0;

}
int encode(int x,int y)
{
	int code=0;
	if(x<xwmin)
		code=code|lb;
	if(x>xwmax)
		code=code|rb;
	if(y<ywmin)
		code=code|bb;
	if(y>ywmax)
		code=code|tb;
	return code;
}
void swapts()
{
	int t=x1;
	x1=x2;
	x2=t;
	t=y1;
	y1=y2;
	y2=t;
}
void swaptscode()
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
			m=(float)(y2-y1)/(float)(x2-x1);
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
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	xwmin=150;
	xwmax=300;
	ywmin=100;
	ywmax=300;
	x1=100;
	y1=150;
	x2=200;
	y2=250;
	rectangle(xwmin,ywmin,xwmax,ywmax);
	dda(x1,y1,x2,y2);
	getch();
	cleardevice();
	rectangle(xwmin,ywmin,xwmax,ywmax);
	cohen();
	getch();
}