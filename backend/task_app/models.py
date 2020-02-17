from django.db import models
from django.contrib.auth import  get_user_model
from django.utils.text import slugify
from datetime import datetime
CHOOSE_PERIOD = (
    (0,'Daily'),
    (1,'Weekly'),
    (2,'Monthly'),
)

User = get_user_model()

class Task(models.Model):
    # owner = models.ForeignKey(User,on_delete = models.CASCADE)
    title = models.CharField(max_length=31)
    content = models.TextField(max_length=500)
    start = models.DateTimeField(default = datetime.now)
    end = models.DateTimeField(default = datetime.now)
    is_active=models.BooleanField(default=True,null=True,blank=True)
    slug = models.SlugField(max_length=50,unique=True,editable=False)
    period = models.PositiveSmallIntegerField(choices=CHOOSE_PERIOD,default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def save(self, **kwargs):
        # calling super so that the instance will get created and self.id will be accessible.
        super(Task, self).save()
        if not self.slug:
            slug = slugify(self.title)
            try:
                post_obj = Task.objects.get(slug=slug)
                slug += "-" + str(self.id)
            except Task.DoesNotExist:
                pass
            self.slug = slug
            self.save()

    def __str__(self):
        return f'{self.owner} {self.period} {self.created_at}'
