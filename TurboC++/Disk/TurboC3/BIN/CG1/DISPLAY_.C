#include<stdio.h>
#include<conio.h>
#include<math.h>
#include<graphics.h>
int op,df_op[10],ws,we,w,h,hs,he,erase_flag;
float x,top,y,df_x[10],df_y[10],df_penx,df_peny,frame_penx,frame_peny;
void initialize()
{
	ws=0;
	we=639;
	hs=0;
	he=479;
	w=we-ws;
	h=he-hs;
	top=0;
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
	int dx,dy,twody,twodx,twodydx,twodxdy,x1,y1,xend,yend,p;
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
		m = (float)(yb-ya)/(float)(xb-xa);
	}
	p = (2 * dy)-dx;
	twody = 2*dy;
	twodydx = 2 * (dy-dx);
	if(xa>xb)
	{
		x1=xb;
		y1=yb;
		xend=xa;
	}
	else
	{
		x1=xa;
		y1=ya;
		xend=xb;
	}
	putpixel(x1,y1,RED);
	while(x1<xend)
	{
		x1++;
		if(p<0)
		{
			p = p + twody;
		}
		else
		{
			if(m>0 && m<1)
			{
				y1++;
			}
			else if(m<0 && m>-1)
			{
				y1--;
			}
			p = p + twodydx;
		}
		putpixel(x1,y1,RED);
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
		x1=xb;
		y1=yb;
		yend=ya;
	}
	else
	{
		x1=xa;
		y1=ya;
		yend=yb;
	}
	putpixel(x1,y1,RED);
	while(y1<yend)
	{
		y1++;
		if(p<0)
		{
			p = p + twodx;
		}
		else
		{
			if(m>=1)
			{
				x1++;
			}
			else if(m<=-1)
			{

				x1--;
			}
			p = p + twodxdy;
		}
		putpixel(x1,y1,RED);
	}
}
}

void putpoint(int op,float x,float y)
{
	if(top>9)
	{
		printf("\nfull");
	}
	else
	{
		df_op[top] = op;
		df_x[top]  = x;
		df_y[top] = y;
		top++;
	}
}
void getpoint(int n)
{
	op = df_op[n];
	x = df_x[n];
	y = df_y[n];
}
void d_f_e(int op)
{
	putpoint(op,df_penx,df_peny);
}
void move_abs(float x,float y)
{
	df_penx = x;
	df_peny = y;
	d_f_e(1);
}
void move_rel(float x,float y)
{
	df_penx+= x;
	df_peny+= y;
	d_f_e(1);
}
void line_abs(float x,float y)
{
	df_penx = x;
	df_peny = y;
	d_f_e(2);
}
void line_rel(float x,float y)
{
	df_penx+=x;
	df_peny+=y;
	d_f_e(2);
}
void domove(float x,float y)
{
	float a = (x * w) + ws;
	float b = (y * h) + hs;
	frame_penx = max1(ws,min1(we,a));
	frame_peny = max1(hs,min1(he,b));
}
void doline(float x,float y)
{
	float x1 = frame_penx;
	float y1 = frame_peny;
	float a = (x * w) + ws;
	float b = (y * h) + hs;
	frame_penx = max1(ws,min1(we,a));
	frame_peny = max1(hs,min1(he,b));
	bres((int)(x1+0.5),(int)(y1+0.5),(int)(frame_penx+0.5),(int)(frame_peny+0.5));

}
void interpreter(int start,int count)
{
	int n;
	for(n=start;n<=count;n++)
	{
		getpoint(n);
		if(op==1)
		{
			domove(x,y);
		}
		else if(op==2)
		{
			doline(x,y);
		}
		else
		{
			printf("\nwrong");
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
	for(i=0;i<=639;i++)
	{
		for(j=0;j<=479;j++)
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
		interpreter(0,(top-1));
		top=0;
	}
}
void house()
{
	line_rel(0.0,0.3);
	line_rel(0.1,0.0);
	line_rel(0.0,-0.3);
	line_rel(-0.1,0.0);
}
void house1()
{
      line_rel(0.1,0.0);
      line_rel(0.0,0.1);
      line_rel(-0.1,0.0);
}
void main()
{
	int gd=DETECT,gm;
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	initialize();
	new_frame();
	move_abs(0.2,0.1);
	house();
	move_abs(0.3,0.2);
	house1();
	m_p_c();
	getch();
}