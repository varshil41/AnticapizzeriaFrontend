#include<graphics.h>
#include<conio.h>
#include<stdio.h>
void main()
{
	int gd=DETECT,gm;
	clrscr();
	initgraph(&gd,&gm,"c:/turboc3/bgi");
	setfillstyle(SOLID_FILL,GREEN);
	circle(200,200,30);
	floodfill(201,201,WHITE);
	getch();

}