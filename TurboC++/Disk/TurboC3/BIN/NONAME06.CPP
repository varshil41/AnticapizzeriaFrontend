#include<stdio.h>
#include<conio.h>
#include<string.h>

char table[7][6][20]={
	{"state","letter","digit","."},
	{"start","id","int","E"},
	{"id","id","id","E"},
	{"int","E","int","S"},
	{"E","E","E","E"},
	{"S","E","real","E"},
	{"real","E","real","E"}
};
char op[7][2]={"+","*","/","-",";",",","="};
char key[8][100]={"int","float","double","char","long","short","boolean","byte"};
char ci[10][20];
char cr[10][20];
char id[10][20];

int idn=0,cin=0,crn=0;
void dfa(char str[])
{
	int idflag=0,ciflag=0,crflag=0,m,c,r,col,row,len,l,flag=0;
	char ch,state[20];
	strcpy(state,"start");
	len=strlen(str);
	for(l=0;l<len;l++)
	{
		for(r=0;r<7;r++)
		{
			if(strcmp(state,table[r][0])==0)
			{
				row=r;
			}
		}
		ch=str[l];
		if(ch>=48 && ch<=57)
		{
			strcpy(state,"digit");
		}
		else if(ch>=65 && ch<=90 || ch>=97 && ch<=122)
		{
			strcpy(state,"letter");
		}
		else if(ch==46)
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
			printf("\nERROR");
			flag=1;
			break;
		}
	}
	if(flag==0)
	{
		if(strcmp(state,"id")==0)
		{
			for(m=0;m<10;m++)
			{
				if(strcmp(id[m],str)==0)
				{
					printf("<#id%d>",m+1);
					idflag=1;
					break;
				}
			}
			if(idflag==0)
			{
				strcpy(id[idn],str);
				printf("<#id%d>",idn+1);
			}
			idn++;
		}
		if(strcmp(state,"int")==0)
		{
			for(m=0;m<10;m++)
			{
				if(strcmp(ci[m],str)==0)
				{
					printf("<#ci%d>",m+1);
					ciflag=1;
					break;
				}
			}
			if(ciflag==0)
			{
				strcpy(ci[cin],str);
				printf("<#ci%d>",cin+1);
			}
			cin++;
		}
		if(strcmp(state,"real")==0)
		{
			for(m=0;m<10;m++)
			{
				if(strcmp(cr[m],str)==0)
				{
					printf("<#cr%d>",m+1);
					crflag=1;
					break;
				}
			}
			if(crflag==0)
			{
				strcpy(cr[crn],str);
				printf("<#cr%d>",crn+1);
			}
			crn++;
		}
	}
}
void operators(char str[])
{
	int i,flag=0;
	char *temp=str;
	for(i=0;i<8;i++)
	{
		if(strcmp(temp,op[i])==0)
		{
			flag=1;
			break;
		}
	}
	if(flag==1)
	{
		printf("<#op%d>",i+1);
	}
	else
	{
		dfa(temp);
	}
}
void keywords(char str[])
{
	int i,flag=0;
	char *temp;
	temp=strtok(str," ");
	while(temp)
	{
		flag=0;
		for(i=0;i<8;i++)
		{
			if(strcmp(temp,key[i])==0)
			{
				flag=1;
				break;
			}
		}
		if(flag==1)
		{
			printf("<#kw%d>",i+1);
		}
		else
		{
			operators(temp);
		}
		temp=strtok(NULL," ");
	}
}
void main()
{
	char input[100];
	clrscr();
	printf("enter\n");
	gets(input);
	keywords(input);
	getch();
}