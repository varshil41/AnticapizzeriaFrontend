#include<stdio.h>
#include<conio.h>
#include<graphics.h>
void main()
{
	int gd=DETECT,gm;
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	setfillstyle(SOLID_FILL,GREEN);
	circle(200,300,100);
	floodfill(201,301,WHITE);
	getch();
}