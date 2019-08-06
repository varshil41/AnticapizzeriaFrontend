#include<stdio.h>
#include<conio.h>
#include<ctype.h>
//#include<iostream.h>
#include<string.h>

char op[8][2]={"+","-","*","/",";",",","="};
char key[8][8]={"int","float","double","char","boolean","short","long","byte"};
char ci[10][20];
char cr[10][20];
char id[10][20];
int idn=0,cin=0,crn=0;
void temp(char str[])
{
	int flag=0,tem,idnflag=0,crnflag=0,cinflag=0,flag1=0;
	tem=(int)str[0];
	if(tem>=65 && tem<=90 || tem>=97 && tem<=122)
	{
		for(int i=0;i<10;i++)
		{
			if(strcmp(id[i],str)==0)
			{
				printf("<#id%d>",i+1);
				idnflag=1;
				break;
			}
		}
		if(idnflag==0)
		{
			strcpy(id[idn],str);
			printf("<#id%d>",idn+1);
			idn++;
		}
	}
	else
	{
		for(int len=0;len<strlen(str);len++)
		{
			flag1=0;
			tem=(int)str[len];
			if(tem==46)
			{
				flag1=1;
				break;
			}
		}
		if(flag1==1)
		{
			for(int j=0;j<10;j++)
			{
				if(strcmp(cr[j],str)==0)
				{
					printf("<#cr%d>",j+1);
					crnflag=1;
					break;
				}
			}
			if(crnflag==0)
			{
				strcpy(cr[crn],str);
				printf("<#cr%d>",crn+1);
				crn++;
			}
		}
		else
		{
			for(int k=0;k<10;k++)
			{
				if(strcmp(ci[k],str)==0)
				{
					printf("<#ci%d>",k+1);
					cinflag=1;
					break;
				}
			}
			if(cinflag==0)
			{
				strcpy(ci[cin],str);
				printf("<#ci%d>",cin+1);
				cin++;
			}
		}
	}
}
void operators(char input[])
{
	int flag=0,i;
	char *temp1=input;
	for(i=0;i<8;i++)
	{
		if(strcmp(temp1,op[i])==0)
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
		temp(temp1);
	}
}
void keywords(char input[])
{
	int flag=0,i;
	char *temp;
	temp=strtok(input," ");
	while(temp)
	{
		for(i=0;i<8;i++)
		{
			if(strcmp(temp,key[i])==0)
			{
				flag=1;
			}
		}
		if(flag==1)
		{
			printf("<#kw%d>",i++);
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