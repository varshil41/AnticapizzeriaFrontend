#include<stdio.h>
#include<conio.h>
#include<graphics.h>
int arrh[10][10]={
{1,1,1,1,1,1,1,1,1,1},
{1,1,1,1,1,1,1,1,1,1},
{0,0,0,0,1,1,0,0,0,0},
{0,0,0,0,1,1,0,0,0,0},
{0,0,0,0,1,1,0,0,0,0},
{0,0,0,0,1,1,0,0,0,0},
{0,0,0,0,1,1,0,0,0,0},
{0,0,0,0,1,1,0,0,0,0},
{1,1,1,1,1,1,1,1,1,1},
{1,1,1,1,1,1,1,1,1,1}
};

void genh(int x,int y)
{
	int z = y,i,j;
	for(i=0;i<10;i++)
	{
		y = z;
		for(j=0;j<10;j++)
		{
			if(arrh[i][j]==1)
			{
				putpixel(x,y,RED);
			}
			y++;
		}
		x++;
	}
}
void main()
{
	int gd=DETECT,gm;
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	genh(200,100);
	getch();
}