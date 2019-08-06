#include<stdio.h>
#include<conio.h>
#include<string.h>
void main()
{
	char table[7][6][10]={
	{"state","letter","digit","."},
	{"start","id","int","E"},
	{"id","id","id","E"},
	{"int","E","int","S"},
	{"E","E","E","E"},
	{"S","E","real","E"},
	{"real","E","real","E"}
	};
	char str[20],state[20],c1;
	int len,row,col,r,c,l,flag=0;
	clrscr();
	printf("enter string");
	scanf("%s",str);
	len=strlen(str);
	strcpy(state,"start");
	for(l=0;l<len;l++)
	{
		for(r=0;r<7;r++)
		{
			if(strcmp(state,table[r][0])==0)
			{
				row=r;
			}
		}
		c1 = str[l];
		if(c1>=48 && c1<=57)
		{
			strcpy(state,"digit");
		}
		else if(c1>=65 && c1<=90 || c1>=97 && c1<=122)
		{
			strcpy(state,"letter");
		}
		else if(c1==48)
		{
			strcpy(state,".");
		}
		else
		{
			printf("\nerror");
			flag=1;
			break;
		}
		for(c=0;c<4;c++)
		{
			if(strcmp(state,table[0][c])==0)
			{
				col=c;
			}
		}
		strcpy(state,table[row][col]);
		if(strcmp(state,"E")==0)
		{
			printf("Error");
			flag=1;
			break;
		}
	}
	if(flag==0)
	{
		printf("%s",state);
	}
	getch();
}