#include<stdio.h>
#include<conio.h>
#include<graphics.h>
#include<math.h>
void display_pic(int x[5][3],int e)
{
	int x1,y1,x2,y2,i;
	for(i=0;i<e;i++)
	{
		if(i==(e-1))
		{
			x1=320+x[i][0];
			y1=240-x[i][1];
			x2=320+x[0][0];
			y2=240-x[0][1];
		}
		else
		{
			x1=320+x[i][0];
			y1=240-x[i][1];
			x2=320+x[i+1][0];
			y2=240-x[i+1][1];
		}
		line(x1,y1,x2,y2);
	}
}
void line1()
{
	line(320,0,320,480);
	line(0,240,640,240);
}
void main()
{
	int x[5][3],y[5][3],id[3][3],i,j,k,ch,e;
	int gd=DETECT,gm;
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	printf("\n 1 for x");
	printf("\n 2 for y");
	printf("\n 3 for xy");
	printf("\n enter choice");
	scanf("%d",&ch);
	printf("\n enter edges");
	scanf("%d",&e);
	for(i=0;i<e;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("enter %d %d",i,j);
			scanf("%d",&x[i][j]);
		}
		x[i][2]=1;
	}
	cleardevice();
	line1();
	display_pic(x,e);
	if(ch==1)
	{
		id[0][0]=1;
		id[1][0]=0;
		id[2][0]=0;
		id[0][1]=0;
		id[1][1]=-1;
		id[2][1]=0;
		id[0][2]=0;
		id[1][2]=0;
		id[2][2]=1;
	}
	else if(ch==2)
	{
		id[0][0]=-1;
		id[1][0]=0;
		id[2][0]=0;
		id[0][1]=0;
		id[1][1]=1;
		id[2][1]=0;
		id[0][2]=0;
		id[1][2]=0;
		id[2][2]=1;
	}
	else if(ch==3)
	{
		id[0][0]=-1;
		id[1][0]=0;
		id[2][0]=0;
		id[0][1]=0;
		id[1][1]=-1;
		id[2][1]=0;
		id[0][2]=0;
		id[1][2]=0;
		id[2][2]=1;
	}
	for(i=0;i<e;i++)
	{
	for(j=0;j<3;j++)
	{
	y[i][j]=0;
	for(k=0;k<3;k++)
	{
	y[i][j]=y[i][j]+x[i][k]*(id[k][j]);
	}
	}
	}
	display_pic(y,e);
	getch();
}