from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in mon_events/__init__.py
from mon_events import __version__ as version

setup(
	name="mon_events",
	version=version,
	description="Manage events",
	author="FOSS United",
	author_email="shridhar.p@zerodha.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
