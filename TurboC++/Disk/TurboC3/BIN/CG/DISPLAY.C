#include<stdio.h>
#include<conio.h>
#include<graphics.h>

int op,df_op[50],h,w,he,we,hs,ws,top,erase_flag;
float df_x[50],df_y[50],frame_penx,frame_peny,df_penx,df_peny,x1,y1;

void inialize()
{
	top=0;
	ws=0;
	hs=0;
	we=680;
	he=480;
	h=he-hs;
	w=we-ws;
	df_penx=0;
	df_peny=0;
	frame_penx=0;
	frame_peny=0;
}
float max1(float a,float b)
{
	if(a>b)
	{
		return a;
	}
	else
	{
		return b;
	}
}
float min1(float a,float b)
{
	if(a<b)
	{
		return a;
	}
	else
	{
		return b;
	}
}
void bres(int xa,int ya,int xb,int yb)
{
	int dx,dy,twody,twodx,twodydx,twodxdy,x,y,xend,yend,p;
	float m;
	dx = abs(xa-xb);
	dy = abs(ya-yb);
if(dx>dy)
{
	if(dx==0)
	{
		m = (float)dy;
	}
	else
	{
		m = (float)(yb-ya)/(xb-xa);
	}
	p = (2 * dy)-dx;
	twody = 2*dy;
	twodydx = 2 * (dy-dx);
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
		m = (float)dy;
	}
	else
	{
		m = (float)(yb-ya)/(float)(xb-xa);
	}
	p = (2 * dx)-dy;
	twodx = 2*dx;
	twodxdy = 2 * (dx-dy);
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
void putpoint(int op,float x1,float y1)
{
	if(top>50)
	{
		printf("full");
	}
	else
	{
		df_op[top]=op;
		df_x[top]=x1;
		df_y[top]=y1;
		top++;
	}
}
void getpoint(int n)
{
	op = df_op[n];
	x1 = df_x[n];
	y1 = df_y[n];
}
void d_f_e(int op)
{
	putpoint(op,df_penx,df_peny);
}
void move_abs(float x1,float y1)
{
	df_penx = x1;
	df_peny = y1;
	d_f_e(1);
}
void move_rel(float x1,float y1)
{
	df_penx += x1;
	df_peny += y1;
	d_f_e(1);
}
void line_abs(float x1,float y1)
{
	df_penx = x1;
	df_peny = y1;
	d_f_e(2);
}
void line_rel(float x1,float y1)
{
	df_penx += x1;
	df_peny += y1;
	d_f_e(2);
}
void domove(float x1,float y1)
{
	float a = (x1*w)+ws;
	float b = (y1*h)+hs;
	frame_penx = max1(ws,min1(we,a));
	frame_peny = max1(hs,min1(he,b));
}
void doline(float x1,float y1)
{
	float x2 = frame_penx;
	float y2 = frame_peny;
	float a = (x1*w)+ws;
	float b = (y1*h)+hs;
	frame_penx = max1(ws,min1(we,a));
	frame_peny = max1(hs,min1(he,b));
	bres((int)(x2+0.5),(int)(y2+0.5),(int)(frame_penx+0.5),(int)(frame_peny+0.5));
}
void interprete(int start,int count)
{
	int n;
	for(n=start;n<=count;n++)
	{
		getpoint(n);
		if(op==1)
		{
			domove(x1,y1);
		}
		else if(op==2)
		{
			doline(x1,y1);
		}
		else
		{
			printf("wrong");
		}
	}
}
void new_frame()
{
	erase_flag=1;
}
void erase()
{
	int i,j;
	for(i=0;i<640;i++)
	{
		for(j=0;j<480;j++)
		{
			putpixel(i,j,0);
		}
	}
}
void m_p_c()
{
	if(erase_flag==0)
	{
		erase();
		erase_flag=1;
	}
	if(top>0)
	{
		interprete(0,top-1);
		top=0;
	}
}
void house()
{
	line_rel(0.0,0.2);
	line_rel(0.2,0.0);
	line_rel(0.0,-0.2);
	line_rel(-0.1,-0.1);
	line_rel(-0.1,0.1);
}
void main()
{
	int gd=DETECT,gm;
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	inialize();
	new_frame();
	move_abs(0.1,0.2);
	house();
	m_p_c();
	getch();
}