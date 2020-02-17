from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    # period = serializers.IntegerField(required=True)

    class Meta:
        model = Task
        read_only_fields = ('is_active',)
        fields = ['id','title','content', 'period', 'start','end','slug']
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'},
        }

    # def create(self, validated_data):
    #     tmp_post = validated_data
    #     user = None
    #     print(validated_data)
    #     request = self.context.get("request")
    #     # try:
    #     if hasattr(request, "user") and  request.user:
    #         user = request.user
    #         print('---------------------',user)
    #         task = Task.objects.create(
    #             owner=user,
    #             title=tmp_post['title'],
    #             content=tmp_post['content'],
    #             period=tmp_post['period'],
    #         )
    #         return task
        #     else:
        #         raise 'fawfwg'
        # except:
        #     raise
