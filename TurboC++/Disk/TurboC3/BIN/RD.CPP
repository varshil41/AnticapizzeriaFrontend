#include<stdio.h>
#include<conio.h>
#include<iostream.h>
#include<ctype.h>
#include<string.h>

struct ast
{
	char val;
	struct ast *left;
	struct ast *right;
};
static int ssm=0,flag=0;
typedef struct ast astnode;

astnode * proc_v(char input[])
{
	astnode *av;
	astnode *newnode = new astnode;
	char sym = input[ssm];
	cout<<"\nproc v :"<<sym;
	if(isalpha(sym)!=0)
	{
		ssm++;
		newnode->val=sym;
		newnode->left=NULL;
		newnode->right=NULL;
	}
	else
	{
		cout<<"error"<<sym<<"is not identifying";
		flag++;
	}
	return newnode;
}
astnode * proc_t(char input[])
{
	astnode * at;
	astnode * bt;
	at=proc_v(input);
	char sym = input[ssm];
	while(sym=='*' || sym=='/')
	{
		char c = sym;
		cout<<"\nproc_t :"<<sym;
		ssm++;
		bt=proc_v(input);
		astnode *newnode = new astnode;
		newnode->val=c;
		newnode->left=at;
		newnode->right=bt;
		at=newnode;
		cout<<"\nproc_t :"<<bt->val;
		sym=input[ssm];
	}
	return at;
}
astnode * proc_e(char input[])
{
	astnode * ae;
	astnode * be;
	ae=proc_t(input);
	char sym = input[ssm];
	while(sym=='+'||sym=='-')
	{
		char c = sym;
		cout<<"\nproc_e :\n"<<sym;
		ssm++;
		be=proc_t(input);
		astnode *newnode = new astnode;
		newnode->val=c;
		newnode->left=ae;
		newnode->right=be;
		ae=newnode;
		sym=input[ssm];
	}
	return ae;
}
void pre(astnode * node1)
{
	if(node1!=NULL)
	{
		cout<<"\t"<<node1->val;
		pre(node1->left);
		pre(node1->right);
	}
}
void main()
{
	char str[100];
	clrscr();
	cout<<"enter string";
	cin>>str;
	astnode *start=proc_e(str);
	if(flag==0)
	{
		pre(start);
	}
	else
	{
		cout<<"Error";
	}
	getch();
}