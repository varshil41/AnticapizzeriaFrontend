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
	char str[20],state[20],c;
	int len,row,col,r,c,l;
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
		c = str[l];
		if(c>=48 && c<=57)
		{
			strcpy(state,"digit");
		}
		else if(c>=65 && c<=90 || c>=97 && c<=122)
		{
			strcpy(state,"letter");
		}
		else if(c==)
	}
}