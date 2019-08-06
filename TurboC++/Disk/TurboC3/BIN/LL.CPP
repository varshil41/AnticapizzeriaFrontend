#include<stdio.h>
#include<conio.h>
#include<string.h>
#include<iostream.h>
char table[6][6][10]={
			{"nt","<id>","+","*","$"},
			{"e","tx","err","err","err"},
			{"x","err","+tx","err",""},
			{"t","vy","err","err","err"},
			{"y","err","","*vy",""},
			{"v","<id>","err","err","err"},
			};
void main()
{
	char input[50],pre_str[50],post_str[50],csf[50],pred[50],nextsym[50];
	char inarr[50][50],pred_str[50];
	int row,col,error=0,ter=0,i=0;
	clrscr();
	cout<<"\nEnter";
	gets(input);
	int len=0;
	char *temp;
	temp=strtok(input," ");
	while(temp)
	{
		strcpy(inarr[len],temp);
		temp=strtok(NULL," ");
		len++;
	}
	if(strcmp(inarr[len-1],"$")==0)
	{
		char single[2];
		strcpy(csf,"e");
		strcpy(nextsym,inarr[0]);
		strcpy(pre_str,'\0');
		strcpy(post_str,'\0');
		while(error==0 && ter==0)
		{
			for(int k=0;k<strlen(csf);k++)
			{
			       single[0]=csf[0];
			       single[1]='\0';
			       for(int r=0;r<6;r++)
			       {
					if(strcmp(single,table[r][0])==0)
					{
						row=r;
						break;
					}
			       }
			       for(int c=0;c<5;c++)
			       {
					if(strcmp(nextsym,table[0][c])==0)
					{
						col=c;
						break;
					}
			       }
			       strcpy(pred,table[row][col]);
			       strcpy(pred_str,pred);
			       if(strcmp(pred,"err")==0)
			       {
					error=1;
					printf("\n ERROR");
					break;
			       }


					if(strlen(nextsym)==strlen(inarr[i+1]))
					{
						error=1;
						printf("Er");
						break;
					}
					if(strcmp(nextsym,pred)==0)
					{
						strcat(pre_str,pred);
						strcpy(nextsym,inarr[++i]);
						strcpy(pred,"");
					}
				if(nextsym[0]==pred[0])
					{
						char t[2];
						t[0]=pred[0];
						t[1]='\0';
						strcat(pre_str,t);
						strcpy(nextsym,inarr[++i]);
						for(int m=0,n=1;m<strlen(pred);m++,n++)
						{
							pred[m]=pred[n];
						}
					}

						if(strlen(csf)>1)
						{
							for(int x=1,y=0;x<strlen(csf);x++,y++)
							{
								post_str[y]=csf[x];
							}
							post_str[y]='\0';
						}
						else
						{
						strcpy(post_str,"");
						}


			       cout<<"\n"<<pre_str<<csf;
			       strcat(pred,post_str);
			       strcpy(csf,pred);
			       cout<<"\t"<<nextsym;
			       if(strcmp(pred_str,"")==0)
			       {
					cout<<"NULL";
			       }
			       else
			       {
					cout<<"\t"<<pred_str;
			       }
			       if(strcmp(csf,"")==0)
			       {
			       ter=1;
			       }
			}
		}
	}
	else
	{
		printf("Invalid string");
	}
	if(error==0)
	{
		cout<<"\n"<<pre_str;
	}
	getch();
}