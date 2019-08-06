#include<stdio.h>
#include<conio.h>
#include<graphics.h>
#include<math.h>
float x,y,df_x[10],df_y[10],top;
float df_penx,df_peny,frame_penx,frame_peny;
float op,df_op[10],w,h,ws,we,hs,he,erase_flag;
float ax[10],ay[10],n;
float sx,sy,h1[3][3],x1,y1;
void initialize()
{
	ws=0;
	we=639;
	hs=0;
	he=479;
	w=we-ws;
	h=he-hs;
	df_penx=0;
	df_peny=0;
	frame_penx=0;
	frame_peny=0;
	top=0;
	erase_flag=0;
}
void ide()
{
	 int i,j;
	 for(i=0;i<3;i++)
	 {
		for(j=0;j<3;j++)
		{
			if(i==j)
			{
				h1[i][j]=1;
			}
			else
			{
				h1[i][j]=0;
			}
		}
	 }
}
void scaling()
{
	h1[0][0]=h1[0][0]*sx;
	h1[1][1]=h1[1][1]*sy;
}
void build_t()
{
	ide();
	scaling();
}

float max1(float a,float b)
{
	if(a>b)
		return a;
	else
		return b;
}
float min1(float a,float b)
{
	if(a<b)
		return a;
	else
		return b;
}
void bres(int xa,int ya,int xb,int yb)
{
	int dx,dy,p,twody,twodydx,twodx,twodxdy,xend,yend,x1,y1;
	float m;
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
			m=(float)(yb-ya)/(float)(xb-xa);
		}
		p=(2*dy)-dx;
		twody=2*dy;
		twodydx=2*(dy-dx);
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
				p+=twody;
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
				p+=twodydx;
			}
			putpixel(x1,y1,RED);
		}
	}
	else
	{
		if(dx==0)
		{
			m=(float)dy;
		}
		else
		{
			m=(float)(yb-ya)/(float)(xb-xa);
		}
		p=(2*dx)-dy;
		twodx=2*dx;
		twodxdy=2*(dx-dy);
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
				p+=twodx;
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
				p+=twodxdy;
			}
			putpixel(x1,y1,RED);
		}
	}
}
void putpoint(float op,float x,float y)
{
	if(top>9)
	{
		printf("\nerror");
	}
	else
	{
		df_op[top]=op;
		df_x[top]=x;
		df_y[top]=y;
		top++;
	}
}
void getpoint(float n)
{
	op=df_op[n];
	x=df_x[n];
	y=df_y[n];
}
void d_f_e(float op)
{
	putpoint(op,df_penx,df_peny);
}
void move_abs(float x,float y)
{
	df_penx=x;
	df_peny=y;
	d_f_e(1);
}
void move_rel(float x,float y)
{
	df_penx+=x;
	df_peny+=y;
	d_f_e(1);
}
void line_abs(float x,float y)
{
	df_penx=x;
	df_peny=y;
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
	float a = (x*w)+ws;
	float b = (y*h)+hs;
	frame_penx=max1(ws,min1(we,a));
	frame_peny=max1(hs,min1(he,b));
}
void doline(float x,float y)
{
	float x1=frame_penx;
	float y1=frame_peny;
	float a = (x*w)+ws;
	float b = (y*h)+hs;
	frame_penx=max1(ws,min1(we,a));
	frame_peny=max1(hs,min1(he,b));
	bres((int)(x1+0.5),(int)(y1+0.5),(int)(frame_penx+0.5),(int)(frame_peny+0.5));
}
void dopolygon(float x,float y)
{
	domove(x,y);
}
void interprete(int start,int count)
{
	float i;
	for(i=start;i<=count;i++)
	{
		getpoint(i);
		if(op==1)
			domove(x,y);
		else if(op==2)
			doline(x,y);
		else
			dopolygon(x,y);
	}
}
void polygon_abs(float ax[],float ay[],float n)
{
	int i;
	df_penx=ax[n-1];
	df_peny=ay[n-1];
	d_f_e(n);
	for(i=0;i<n;i++)
	{
		line_abs(ax[i],ay[i]);
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
void do_t(float x,float y)
{
	float temp;
	temp=(x*h1[0][0]) + (y*h1[1][0]) + h1[2][0];
	y1 = (x*h1[0][1]) + (y*h1[1][1]) + h1[2][1];
	x1=temp;
}
void get_t_point(int i)
{
	getpoint(i);
	if(op>0 || op<-31)
	{
		do_t(x,y);
	}
}
void inter(int start,int count)
{
	int i;
	for(i=start;i<=count;i++)
	{
		get_t_point(i);
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
			dopolygon(x1,y1);
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
		interprete(0,(top-1));
		build_t();
		inter(0,(top-1));
		top=0;
	}
}
void house()
{
	line_rel(0.0,0.3);
	line_rel(-0.2,0.0);
	line_rel(0.0,-0.3);
	line_rel(0.2,0.0);
}
void main()
{
	int gd=DETECT,gm;
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	initialize();
	ax[0]=0.1;
	ax[1]=0.2;
	ax[2]=0.3;
	ax[3]=0.1;
	ay[0]=0.4;
	ay[1]=0.2;
	ay[2]=0.4;
	ay[3]=0.4;
	sy=0.4;
	sx=0.4;
	new_frame();
	polygon_abs(ax,ay,4);
     //	house();
	m_p_c();
	getch();
}