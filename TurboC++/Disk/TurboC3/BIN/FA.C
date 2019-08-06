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
	{"S","E","real","E"},
	{"E","E","E","E"},
	{"real","E","real","E"}
	};
	char str[20],state[20];
	int row=0,col=0,flag=0;
	printf("Enter input");
	scanf("%s",str);
	int len=strlen(str);
	strcpy(state,"start");
	for(int l=0;l<len;l++)
	{
		for(int r=0;r<7;r++)
		{
			if(strcmp(table[r][0],state)==0)
			{
				row=r;
			}
		}
			char c = str[l];
			if(c>=48 && c<=57)
			{
				strcpy(state,"digit");
			}
			else if(c>=65 && c<=90 || c>=97 && c<=123)
			{
				strcpy(state,"letter");
			}
			else if(c==46)
			{
				strcpy(state,".");
			}
			else
			{
				printf("ERROR");
				flag=1;
				break;
			}
			for(int c1=0;c1<4;c1++)
			{
				if(strcmp(table[0][c1],state)==0)
				{
					col=c1;
				}
			}
			strcpy(state,table[row][col]);
			if(strcmp(state,"E")==0)
			{
				printf("ERROR");
				flag=1;
				break;
			}
	}
	if(flag==0)
	{
		printf("\n %s",state);
	}
}