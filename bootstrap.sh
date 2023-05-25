#cdk bootstrap aws://341681825452/eu-central-1 --custom-permissions-boundary eo_role_boundary

#https://medium.com/@imageryan/bootstrapping-aws-cdk-in-a-secure-environment-9bc778ea6d94
#cdk bootstrap --show-template > my-bootstrap.yml

#aws cloudformation create-stack --region eu-central-1 --capabilities CAPABILITY_NAMED_IAM --template-body file://my-bootstrap.yml --parameters ParameterKey=PermissionsBoundaryPolicy,ParameterValue=arn:aws:iam::341681825452:policy/eo_role_boundary ParameterKey=CloudFormationExecutionPolicies,ParameterValue=arn:aws:iam::aws:policy/AdministratorAccess --stack-name CDKToolkit

mkdir sample-app
cd sample-app
cdk init sample-app --language typescript

